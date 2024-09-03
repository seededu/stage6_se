brew install uv
brew install python@3.11
brew install act
uv venv --python python3.11
source .venv/bin/activate
uv pip install -r src/requirements.txt
