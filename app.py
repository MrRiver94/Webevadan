from flask import Flask, jsonify, request
from flask_jwt_extended import JWTManager, create_access_token, jwt_required, get_jwt_identity
from flask_bcrypt import Bcrypt
from flask_sqlalchemy import SQLAlchemy
import os



app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DATABASE_URL", "postgresql://socialnetdb_fh3r_user:YZOkEuZdMsmweoZ19qJ8QZ15Q5n9iK90@dpg-cupova23esus738hcddg-a.frankfurt-postgres.render.com/socialnetdb_fh3r")
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db = SQLAlchemy(app)
app = Flask(__name__)

# Modelo de Usuario
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)


@app.route("/register", methods=["POST"])
def register():
    data = request.json
    usuario = {"id": len(usuarios) + 1, "nombre": data["nombre"], "email": data["email"]}
    usuarios.append(usuario)
    return jsonify(usuario), 201

@app.route("/login", methods=["POST"])
def create_post():
    data = request.get_json()
    user = User.query.filter_by(username=data["username"]).first()
    if user and bcrypt.check_password_hash(user.password, data["password"]):
        access_token = create_access_token(identity=user.id)
        return jsonify({"token": access_token})
    return jsonify({"message": "Credenciales incorrectas"}), 401



if __name__ == "__main__":
    app.run(debug=True)