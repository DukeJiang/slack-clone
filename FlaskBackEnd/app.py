import json
import sqlite3
from flask import Flask, request, jsonify

app = Flask(__name__)

def db_connection():
    conn = None
    try:
        conn = sqlite3.connect("belay.sqlite")
    except sqlite3.error as e:
        print(e)
    return conn


@app.route("/replies", methods=["GET", "POST"])
def replies():
    conn = db_connection()
    cursor = conn.cursor()

    if request.method == "GET":
        requestData = request.get_json()
        parentId = requestData["parentId"]
        cursor.execute("SELECT * FROM replies WHERE parentId=?", (parentId,))
        rows = cursor.fetchall()
        replies = [
            dict(user=row[2], avatar=row[3], timestamp=row[4], content=row[5])
            for row in rows
        ]
        if replies is not None:
            return jsonify(replies)

    if request.method == "POST":
        requestData = request.get_json()
        parentId = requestData["parentId"]
        user = requestData["user"]
        avatar = requestData["avatar"]
        timestamp = requestData["timestamp"]
        content = requestData["content"]
        sql = """INSERT INTO replies (parentId, user, avatar, timestamp, content)
                 VALUES (?, ?, ?, ?, ?)"""
        cursor = cursor.execute(sql, (parentId, user, avatar, timestamp, content))
        conn.commit()
        return jsonify({"status" : "successfully added reply"})


if __name__ == "__main__":
    app.run(debug=True)
    