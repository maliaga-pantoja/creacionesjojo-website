# My Website

This project is a simple website built using vanilla JavaScript and HTML5. It is designed to be developed within a Docker container and includes a GitHub Actions pipeline for building the Docker image and deploying the application.

## Project Structure

```
my-website
├── src
│   ├── index.html         # Main HTML document
│   ├── css
│   │   └── styles.css     # Styles for the website
│   ├── js
│   │   └── main.js        # Main JavaScript code
│   └── assets
│       └── fonts          # Font files used in the website
├── .github
│   └── workflows
│       └── build-and-deploy.yml  # GitHub Actions workflow for CI/CD
├── Dockerfile              # Instructions for building the Docker image
├── docker-compose.yml      # Docker services configuration
├── .dockerignore           # Files to ignore when building the Docker image
├── .gitignore              # Files to ignore in Git
└── README.md               # Project documentation
```

## Getting Started

To get started with this project, follow these steps:

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd my-website
   ```

2. **Build the Docker image**:
   ```
   docker-compose build
   ```

3. **Run the application**:
   ```
   docker-compose up
   ```

4. **Access the website**:
   Open your browser and navigate to `http://localhost:8080`.

## Deployment

The application is set up with a GitHub Actions workflow that automatically builds and deploys the Docker image whenever changes are pushed to the main branch. 

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.