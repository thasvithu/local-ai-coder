import os
from dotenv import load_dotenv

load_dotenv()


OLLAMA_URL = os.getenv(
    "OLLAMA_URL",
    "http://localhost:11434"
)

MODEL = os.getenv(
    "MODEL",
    "qwen2.5-coder:7b"
)