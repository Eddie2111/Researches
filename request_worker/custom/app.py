import requests
import string
import random
import time
import csv

# Function to generate a random string
def generate_string(length: int = 10) -> str:
    characters = string.ascii_letters + string.digits
    return ''.join(random.choice(characters) for _ in range(length))

# Function to create payload
def create_payload() -> dict:
    return {
        "name": generate_string(),
        "username": generate_string(),
        "email": generate_string() + "@test.com",
    }

# Function to send request with payload
def send_request_payload():
    with open("request_logs.csv", "w", newline='') as csvfile:
        fieldnames = ['name', 'username', 'email', 'response_time']
        writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
        writer.writeheader()

        for _ in range(100000):
            payload = create_payload()
            start_time = time.time()  # Start time
            response = requests.post("http://localhost:3100/createUser", json=payload)
            end_time = time.time()  # End time
            elapsed_time = end_time - start_time  # Calculate elapsed time

            # Write data to CSV file
            writer.writerow({
                'name': payload['name'],
                'username': payload['username'],
                'email': payload['email'],
                'response_time': round(elapsed_time, 3)  # Round response time to 3 decimal places
            })

            print(f"Payload: {payload}, Response Time: {elapsed_time:.3f} seconds")
            time.sleep(0.1)

send_request_payload()
