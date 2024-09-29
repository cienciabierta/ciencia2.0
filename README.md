# IDApp 1.0 - Interpreter of Antivaccine Discourses

## Overview

**IDApp 1.0** is a powerful tool designed to **analyze and interpret antivaccine discourses** on social media platforms. The tool is based on theoretical models from the fields of **public understanding of science**, **epistemology of testimony**, and **transmedia communication**. Its primary goal is to identify and categorize antivaccine narratives, providing insights into the mechanisms that contribute to the proliferation of **conspiratorial thinking** and **misinformation**.

This project was developed as part of the research initiative **"Models of Public Understanding of Science in the Interparadigmatic Communication of Disciplinary Matrices of Experts/Interface Agents and Antivaccine Movements in Digital Social Networks"** at the **Health Sciences Department of the National University of La Matanza (Argentina)**.

## Features

- **Automated discourse analysis**: IDApp 1.0 uses pre-defined variables and indicators to analyze the structure and content of antivaccine discourses.
- **Categorization of narratives**: The app identifies key antivaccine themes such as **distrust in scientific authority**, **promotion of alternative figures**, **confirmation bias**, and **global vaccine conspiracy theories**.
- **Open-source**: IDApp 1.0 is a free and open-source tool, in line with the principles of **open science**. Contributions are welcome to improve the tool’s performance and expand its applicability to other fields of misinformation.
- **Multiplatform compatibility**: The app is designed to analyze data from various social media platforms, including Facebook, X (formerly Twitter), Instagram, Telegram, and YouTube.

## Installation

To run **IDApp 1.0**, you need the following:

### Prerequisites

- Python 3.x
- Git
- The following Python libraries:
  - Pandas
  - Numpy
  - Matplotlib
  - Scikit-learn
  - NLTK (Natural Language Toolkit)

### Installation steps

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/IDApp.git
   ```

2. Navigate to the project directory:

   ```bash
   cd IDApp
   ```

3. Install the required libraries:

   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:

   ```bash
   python idapp.py
   ```

## Usage

1. **Input data**: The application takes **raw data** from social media platforms. You can input this data in CSV format, containing text fields with user comments, posts, or discussions about vaccines.

2. **Analysis process**: IDApp 1.0 will analyze the input data, applying the defined variables and indicators to categorize the antivaccine narratives. The output includes:
   - **Categorization** of antivaccine discourse based on predefined themes (e.g., distrust in science, conspiracy theories, fallacies).
   - **Statistical visualization** of the frequency and distribution of different types of antivaccine narratives across platforms.

3. **Results**: The results can be exported in CSV or visualized in charts, providing insight into how antivaccine narratives spread on different platforms.

## Variables and Indicators

The analysis in IDApp 1.0 is based on the following **key variables**:

- **Deferential Obliqueness**: Users who appeal to alternative figures (e.g., non-scientific authorities or dissenting scientists).
- **Community Gatekeeping**: The narrative strategies used to reinforce group beliefs against external criticism.
- **Confirmation Bias**: Selective presentation of evidence supporting the antivaccine position, while dismissing contradictory information.
- **Conspiracy Theories**: Narratives about global conspiracies involving vaccines, pharmaceutical companies, and governments.
- **Propaganda and Victimization**: The framing of the antivaccine community as oppressed or targeted by mainstream authorities.

## Contribution

We welcome contributions to improve **IDApp 1.0** and expand its applicability. You can contribute by:

- **Reporting bugs** or suggesting improvements via GitHub Issues.
- **Submitting pull requests** with new features, optimizations, or documentation.
- **Translating the app** for use in different languages and cultural contexts to analyze misinformation globally.

## Roadmap

We plan to extend **IDApp 1.0** with the following features:

- Support for additional social media platforms (e.g., Reddit, TikTok).
- Enhanced sentiment analysis for a deeper understanding of emotional triggers in antivaccine discourses.
- A dashboard for real-time monitoring of antivaccine discussions across social media.

## License

This project has an open access licence. It has been developed by Fernando Proto Gutierrez et al., at the Departamento de Ciencias de la Salud de la Universidad Nacional de La Matanza.

## Citation

If you use **IDApp 1.0** in your research, please cite the following paper:

Proto Gutierrez, F., et al., **Epistemología política de la infodemia libertaria-antivacunas**. Arkho Ediciones, 2024.

## Contact

For any inquiries or support requests, feel free to contact us at:

- Email: gproto@unalam.edu
- GitHub: https://github.com/cienciabierta/ciencia2.0
