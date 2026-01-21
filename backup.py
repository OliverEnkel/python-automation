import shutil
import datetime

SOURCE = "example_files"
BACKUP_NAME = f"backup_{datetime.date.today()}"

shutil.make_archive(BACKUP_NAME, "zip", SOURCE)

print("Backup erfolgreich erstellt.")
