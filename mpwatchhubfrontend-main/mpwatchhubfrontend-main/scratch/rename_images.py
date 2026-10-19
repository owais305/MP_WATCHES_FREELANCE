import os
import json

base_dir = r"c:\abdulrehman\E COMMERCE STORE WATCH\PROJECT\assets\images\brands"
brands = ["CARTIER", "CASIO", "GSHOCK", "HUBLOT", "OMEGA", "ROLEX", "TISOT"]

products = []
id_counter = 1

for brand in brands:
    brand_path = os.path.join(base_dir, brand)
    if not os.path.exists(brand_path):
        continue
    
    files = [f for f in os.listdir(brand_path) if f.lower().endswith(('.jpeg', '.jpg', '.png'))]
    for i, filename in enumerate(files):
        new_filename = f"{brand.lower()}-{i+1}.jpeg"
        old_path = os.path.join(brand_path, filename)
        new_path = os.path.join(brand_path, new_filename)
        
        try:
            os.rename(old_path, new_path)
            products.append({
                "id": id_counter,
                "name": f"{brand.capitalize()} Luxury Edition {i+1}",
                "brand": brand,
                "price": "₹1500",
                "image": f"assets/images/brands/{brand}/{new_filename}",
                "description": f"Experience the pinnacle of craftsmanship with this {brand.capitalize()} timepiece. A perfect blend of style and precision."
            })
            id_counter += 1
        except Exception as e:
            print(f"Error renaming {filename}: {e}")

with open(r"c:\abdulrehman\E COMMERCE STORE WATCH\PROJECT\assets\js\products.json", "w") as f:
    json.dump(products, f, indent=4)

print(f"Processed {len(products)} products.")
