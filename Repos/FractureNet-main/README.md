# FractureNet

FractureNet is a state-of-the-art AI-powered medical imaging analysis platform designed to assist healthcare professionals in detecting bone fractures with high precision and low latency. The system utilizes advanced computer vision architectures and deep learning techniques to transform X-ray analysis into a rapid, data-driven diagnostic workflow.


## Technical Overview

FractureNet implements a decoupled architecture that separates high-performance AI inference from a responsive user interface. The core detection engine is built upon the YOLOv8 architecture, specifically optimized for the subtle features of medical imaging data.

### Core Capabilities

- **Automated Fracture Detection**: Leverages YOLOv8 (You Only Look Once v8) for real-time object detection, achieving clinical-grade precision (>90% accuracy) on validated datasets.
- **Explainable AI (XAI)**: Implements Grad-CAM (Gradient-weighted Class Activation Mapping) visualizations and semi-transparent heatmap overlays to provide radiologists with visual justifications for model predictions.
- **Low-Latency Inference**: Optimized inference pipeline capable of processing high-resolution X-ray images and generating diagnostic insights in under 15 seconds.
- **Asynchronous Data Handling**: Utilizes FastAPI's asynchronous capabilities and Python's `aiofiles` for efficient non-blocking I/O operations.
- **Secure Infrastructure**: Designed with modular security in mind, utilizing JWT (JSON Web Tokens) for future authentication scaling and end-to-end data encryption.

---

## System Architecture

### Backend (Detection Engine)
The backend is a high-performance Python-based service utilizing **FastAPI**. It handles:
- **Inference Pipeline**: Manages the lifecycle of the YOLOv8 model (`Final.pt`), including image preprocessing (normalization, resizing) and post-processing (non-maximum suppression).
- **Visualization Layer**: Generates three distinct outputs for every analysis:
    1. **Plotted Result**: Standard bounding box visualization.
    2. **Explanation Overlay**: A focused highlighting of the detected fracture site with contextual padding.
    3. **Grad-CAM Visualization**: Heatmaps representing the activation intensity of the neural network's decision-making layers.
- **Analytics Management**: Persistent tracking of diagnostic throughput via localized JSON-based state management.

### Frontend (UI/UX)
The frontend is a modern **Next.js 14** application utilizing the **App Router** for optimized routing and performance:
- **Responsive Dashboard**: Built with **Tailwind CSS** and **Shadcn UI** for a medical-grade aesthetic and high accessibility.
- **Real-time Interaction**: Integrated with **Framer Motion** for smooth state transitions and **Recharts** for dynamic analytical data visualization.
- **State Management**: Client-side state handling for upload progress and interactive result exploration.

---

## Technical Stack

### Infrastructure & Core
- **AI Framework**: PyTorch (v1.8.0+)
- **Detection Model**: YOLOv8 (Ultralytics)
- **API Framework**: FastAPI (v0.103.1)
- **Runtime Environment**: Python 3.9+ / Node.js 18+

### Image Processing & XAI
- **Computer Vision**: OpenCV (v4.5.0), Scikit-image (v0.19.0)
- **Image Manipulation**: Pillow (v9.0.0)
- **Explainability**: LIME & Custom Grad-CAM implementations

### UI/UX Implementation
- **Framework**: Next.js 14 (React 18)
- **Component Library**: Shadcn UI, Radix UI
- **Analytical Visuals**: Recharts
- **Dynamic Styling**: Tailwind CSS, Lucide React

---

## Development & Deployment

### Backend Setup
1. Initialize virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # venv\Scripts\activate on Windows
   ```
2. Install production-grade dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Execute the service:
   ```bash
   uvicorn app:app --host 0.0.0.0 --port 8000 --reload
   ```

### Frontend Setup
1. Install Node.js dependencies:
   ```bash
   npm install
   ```
2. Launch development server:
   ```bash
   npm run dev
   ```

---

## API Specification

| Endpoint | Method | Payload | Returns |
| :--- | :--- | :--- | :--- |
| `/detect` | `POST` | `multipart/form-data` (image) | Detection coordinates, confidence, and visualization URLs |
| `/total_analyses` | `GET` | N/A | Integer count of all system analyses |
| `/status` | `GET` | N/A | Service health and uptime metrics |
| `/results/{id}` | `GET` | `detection_id` | Static file serving for generated artifacts |

---

## Project Structure

```text
FractureNet/
├── backend/                # Python/FastAPI Detection Service
│   ├── Final.pt            # Pre-trained YOLOv8 Weights
│   ├── app.py              # Main Application Entry & Logic
│   ├── analysis_count.json # Analytics Data Store
│   ├── results/            # Artifact Storage (Heatmaps, Explanations)
│   └── uploads/            # Temporary File Buffer
├── frontend/               # Next.js/React Application
│   ├── app/                # App Router Structure
│   ├── components/         # Atomic UI Components
│   ├── lib/                # Shared Utility Functions
│   └── public/             # Static Assets & Icons
├── requirements.txt        # Python Dependency Manifest
└── LICENSE                 # MIT License
```

---

## Contributing & Roadmap

We welcome technical contributions focused on model accuracy and system scalability.

- **Roadmap**:
    - Integration with DICOM/PACS standards.
    - Multi-class classification for varied fracture types (e.g., greenstick, comminuted).
    - GPU-accelerated inference via TensorRT.
    - Distributed analytics logging.

---

**Disclaimer**: FractureNet is a decision-support tool designed for research and educational applications. It is not a substitute for clinical judgment by a certified medical professional.
