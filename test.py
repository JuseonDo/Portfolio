import qrcode

url = "https://juseondo.github.io/Portfolio/"
img = qrcode.make(url)
img.save("portfolio_qr.png")