# ServerPlus

ServerPlus is a containerized DevOps project designed to demonstrate Linux server management, automation, Docker, Git, GitHub, and CI/CD practices.

## Project Objective

The main goal of ServerPlus is to build and automate a web application using real-world DevOps tools and practices.

## Technologies Used

- Linux
- Shell Scripting
- Git
- GitHub
- Docker
- Docker Compose
- Nginx
- Jenkins
- CI/CD

## Project Architecture

GitHub
   ↓
Jenkins
   ↓
Docker Build
   ↓
Docker Container
   ↓
Nginx
   ↓
ServerPlus Web Application

## Docker

Build the Docker image:

```bash
docker build -t serverplus:v1 .
