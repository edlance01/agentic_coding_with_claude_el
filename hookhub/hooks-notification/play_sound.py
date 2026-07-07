import subprocess
from pathlib import Path


def main():
    sound = Path(__file__).parent / "ulala.wav"
    subprocess.run(["afplay", str(sound)], check=True)


if __name__ == "__main__":
   main()
