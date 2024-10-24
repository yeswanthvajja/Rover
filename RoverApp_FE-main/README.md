# MARS Rover Image Fetcher App

## Quick Start 🚀

### Docker (Easiest & Coolest 😎)

1. **Get Docker & Docker Compose**
    - Make sure you've got Docker and Docker Compose on your machine.

2. **Grab `.env` File**

    ```bash
    wget -q https://raw.githubusercontent.com/KiranViswanathB/RoverService/main/sample.env -O .env
    ```

    Or for Windows

    ```powershell
    invoke-WebRequest "https://raw.githubusercontent.com/KiranViswanathB/RoverService/main/sample.env" -OutFile .env
    ```
3. **Snag the `compose.yml` File**

    ```bash
    wget -q https://raw.githubusercontent.com/KiranViswanathB/RoverApp_FE/main/compose.yaml
    ```

   Or for Windows

    ```powershell
    Invoke-WebRequest "https://raw.githubusercontent.com/KiranViswanathB/RoverApp_FE/main/compose.yaml" -OutFile compose.yaml
   ```
4. Launch!
   ```bash
    docker compose up
   ```
   Open your browser and navigate to http://localhost:8888.

### Local Development 👨‍💻

#### Backend 🛠️
1. **Clone & Setup**
   ```bash
    git clone https://github.com/KiranViswanathB/RoverService
   ```
   Open it in Visual Studio and rename sample.env to .env, then fill it up.
2. **Run It**
   - Set the default run to IIS in Visual Studio and hit the Run button.

#### Frontend 🎨

1. **Clone & Install**
   ```bash
    git clone https://github.com/KiranViswanathB/RoverApp_FE
   ```
   Install Dependencies
   ```bash
   npm install
   ```

2. **Config & Run**
   - Open  `config.js` and make sure the API URL looks good.
       ```bash
       npm run dev
       ```



## Environment Variables 📝

Here's what you'll find in `sample.env`:

| Variable     | Value             | Example   | Required | What It Does                              |
|--------------|-------------------|-----------|----------|-------------------------------------------|
| NASA_API_KEY | Your NASA API Key | xxxxxxxxx | ✅        | Needed to fetch those cool Mars pics 🪐📸 |

That's it! You're ready to explore Mars right from your computer! 🌌🔭

## Technology Stack 🛠️
- **ASP .NET Core 6.0**
   - Utilized for crafting Web APIs.

- **React v18**
   - Employs the latest React version to create dynamic and responsive user interfaces.

- **Caddy Server**
   - Integrated as a reverse proxy and for efficient file serving within our containerized environment, optimizing resource usage.

- **Docker**
   - Employed for containerizing our application, ensuring consistent and reproducible deployment across environments.

- **Docker Compose**
   - Utilized for orchestrating Docker containers, streamlining the management of multi-container applications.
