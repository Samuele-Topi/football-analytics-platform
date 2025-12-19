from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI(
    title="Football Analytics Platform API",
    description="Backend API for the Football Analytics Platform",
    version="1.3.8",
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # Adjust as needed for frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Welcome to the Football Analytics Platform API"}


@app.get("/health")
async def health_check():
    return {"status": "healthy"}
