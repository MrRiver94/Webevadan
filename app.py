from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
import os
from flask_migrate import Migrate

# Configuración de Flask
app = Flask(__name__)
app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "supersecret")
app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "jwt_secret_key")
app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "postgresql://socialnetdb_fh3r_user:YZOkEuZdMsmweoZ19qJ8QZ15Q5n9iK90@dpg-cupova23esus738hcddg-a.frankfurt-postgres.render.com/socialnetdb_fh3r")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

# Inicializar extensiones
db = SQLAlchemy(app)
bcrypt = Bcrypt(app)
jwt = JWTManager(app)

# Modelo de Usuario
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    full_name = db.Column(db.String(100), nullable=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=True)
    password_hash = db.Column(db.String(256), nullable=True)
    birth_date = db.Column(db.Date, nullable=True)
    gender = db.Column(db.String(10), nullable=True)
    country = db.Column(db.String(50), nullable=True)
    city = db.Column(db.String(50), nullable=True)
    phone = db.Column(db.String(20), nullable=True)
    profile_pic = db.Column(db.String(256), nullable=True)
    bio = db.Column(db.Text, nullable=True)

with app.app_context():
    db.create_all()

migrate = Migrate(app, db)

# Ruta para registrar usuarios
@app.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    if not data:
        return jsonify({"error": "No se recibieron datos"}), 400

    hashed_password = bcrypt.generate_password_hash(data["password"]).decode('utf-8')
    new_user = User(
        full_name=data["fullName"],
        username=data["username"],
        email=data["email"],
        password_hash=hashed_password,
        birth_date=data["birthDate"],
        gender=data["gender"],
        country=data["country"],
        city=data["city"],
        phone=data.get("phone"),
        profile_pic=None,
        bio=data.get("bio")
    )
    db.session.add(new_user)
    db.session.commit()

    return jsonify({"message": "Usuario creado"}), 201

# Ruta para iniciar sesión

"""
@app.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    if not data or "username" not in data or "password" not in data:
        return jsonify({"error": "Faltan datos"}), 400

    user = User.query.filter_by(username=data["username"]).first()
    if user and bcrypt.check_password_hash(user.password_hash, data["password"]):
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token})
    
    return jsonify({"message": "Credenciales incorrectas"}), 401

"""
@app.route("/users", methods=["GET"])
def get_users():

    print("HOLA1")
    users = User.query.all()
    """
    user_list = [
        {
            "id": user.id,
            "full_name": user.full_name,
            "username": user.username,
            "email": user.email,
            "birth_date": str(user.birth_date),
            "gender": user.gender,
            "country": user.country,
            "city": user.city,
            "phone": user.phone,
            "profile_pic": user.profile_pic,
            "bio": user.bio
        }
        for user in users
    ]
    """
    return jsonify("HOLA")

# Ejecutar la aplicación
if __name__ == "__main__":
    app.run(debug=True)
