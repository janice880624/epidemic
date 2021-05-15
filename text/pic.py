from PIL import Image
import pytesseract
  
img = Image.open('p1.png')
text = pytesseract.image_to_string(img, lang='chi_tra')
print(text)