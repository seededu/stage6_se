from flask import Flask, render_template, request, jsonify
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

# -------------------------------------------------------
# Database configuration
# -------------------------------------------------------
app.config["SQLALCHEMY_DATABASE_URI"]  = f"sqlite:///tasks.db"
db = SQLAlchemy(app)

# Define the Task Model
class Task(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.String(255), nullable=False)

    def to_dict(self):
        return {
            "id": self.id,
            "text": self.text
        }

# Create the database if it doesn't exist
with app.app_context():
    db.create_all()

# -------------------------------------------------------
# Routes
# -------------------------------------------------------

# Home route serves the main HTML page
@app.route("/")
def home():
    return render_template("index.html")

@app.route("/api/tasks", methods=["GET"])
def get_tasks():
    """Return all tasks as JSON."""
    tasks = Task.query.all()
    return jsonify([task.to_dict() for task in tasks]), 200

@app.route("/api/tasks", methods=["POST"])
def create_task():
    """Create a new task."""
    data = request.get_json()
    if not data or "text" not in data:
        return jsonify({"error": "Invalid data"}), 400

    new_task = Task(text=data["text"])
    db.session.add(new_task)
    db.session.commit()
    return jsonify(new_task.to_dict()), 201

@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
def delete_task(task_id):
    """Delete an existing task."""
    task = Task.query.get(task_id)
    if not task:
        return jsonify({"error": "Task not found"}), 404

    db.session.delete(task)
    db.session.commit()
    return jsonify({"message": f"Task {task_id} deleted"}), 200

# -------------------------------------------------------
# Run the app
# -------------------------------------------------------
app.run(debug=True, reloader_type='stat', port=5000)

