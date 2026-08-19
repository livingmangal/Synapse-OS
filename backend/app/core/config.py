import os
from pydantic import BaseModel
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseModel):
    PROJECT_NAME: str = "Sanjeevani OS"
    VERSION: str = "1.0.0"
    API_PREFIX: str = "/api"
    
    # LLM API Keys & Model Configurations
    GROQ_API_KEY: str = os.getenv("GROQ_API_KEY", "")
    GROQ_MODEL: str = os.getenv("GROQ_MODEL", "llama-3.3-70b-versatile")
    
    OPENROUTER_API_KEY: str = os.getenv("OPENROUTER_API_KEY", "")
    OPENROUTER_MODEL: str = os.getenv("OPENROUTER_MODEL", "meta-llama/llama-3.3-70b-instruct")
    
    GEMINI_API_KEY: str = os.getenv("GEMINI_API_KEY", "")
    OPENAI_API_KEY: str = os.getenv("OPENAI_API_KEY", "")
    
    # OpenWA / WhatsApp settings
    OPENWA_URL: str = os.getenv("OPENWA_URL", "http://localhost:3000")
    OPENWA_API_KEY: str = os.getenv("OPENWA_API_KEY", "")
    
    # Blockchain / IPFS settings
    PINATA_JWT: str = os.getenv("PINATA_JWT", "")
    BLOCKCHAIN_RPC_URL: str = os.getenv("BLOCKCHAIN_RPC_URL", "http://127.0.0.1:8545")
    CONTRACT_ADDRESS: str = os.getenv("CONTRACT_ADDRESS", "")

settings = Settings()
