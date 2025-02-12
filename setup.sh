brew install uv
brew install python@3.11
brew install act
brew install graphviz
uv venv --python python3.11
source .venv/bin/activate
uv pip install -r requirements.txt
