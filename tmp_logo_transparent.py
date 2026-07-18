from PIL import Image

path = 'public/images/logo.png'
img = Image.open(path).convert('RGBA')
data = []
for r, g, b, a in img.getdata():
    if a < 200:
        data.append((255, 255, 255, 0))
        continue

    luminance = (0.299 * r) + (0.587 * g) + (0.114 * b)
    if luminance > 235:
        data.append((255, 255, 255, 0))
    else:
        data.append((r, g, b, a))

img.putdata(data)
img.save(path)
print('updated', path)
