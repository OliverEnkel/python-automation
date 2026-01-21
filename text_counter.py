file_name = "example_files/beispiel.txt"

with open(file_name, "r", encoding="utf-8") as file:
    lines = file.readlines()

word_count = sum(len(line.split()) for line in lines)
line_count = len(lines)

print(f"Zeilen: {line_count}")
print(f"Wörter: {word_count}")
