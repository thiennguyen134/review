# Use the official Maven image to build the app with Java 21
FROM maven:3.8.4-openjdk-17 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy the entire backend project to the working directory
COPY . .

# Build the application
RUN mvn clean package -DskipTests

# Use a new image with JDK for running the application
FROM openjdk:21-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the built application from the previous stage
COPY --from=build /app/target/investment-management-0.0.1-SNAPSHOT.jar /app/target/investment-management-0.0.1-SNAPSHOT.jar

# Expose the port the application runs on
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "target/investment-management-0.0.1-SNAPSHOT.jar"]
