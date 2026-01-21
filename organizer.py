import os
import shutil

SOURCE_FOLDER = "example_files"

FILE_TYPES = {
    "Bilder": [".jpg", ".png", ".jpeg"],
    "Dokumente": [".pdf", ".txt", ".docx"],
    "Sonstiges": []
}

for file in os.listdir(SOURCE_FOLDER):
    file_path = os.path.join(SOURCE_FOLDER, file)

    if os.path.isfile(file_path):
        moved = False
        for folder, extensions in FILE_TYPES.items():
            if file.lower().endswith(tuple(extensions)):
                target = os.path.join(SOURCE_FOLDER, folder)
                os.makedirs(target, exist_ok=True)
                shutil.move(file_path, target)
                moved = True
                break

        if not moved:
            target = os.path.join(SOURCE_FOLDER, "Sonstiges")
            os.makedirs(target, exist_ok=True)
            shutil.move(file_path, target)

print("Dateien wurden erfolgreich sortiert.")
