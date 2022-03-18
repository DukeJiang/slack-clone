import sqlite3

conn = sqlite3.connect("belay.sqlite")

cursor = conn.cursor()

sql_query = """ CREATE TABLE messages (
    id integer PRIMARY KEY,
    user text NOT NULL,
    avatar text NOT NULL,
    timestamp integer NOT NULL,
    content text NOT NULL
)"""
cursor.execute(sql_query)

sql_query = """ CREATE TABLE replies (
    id integer PRIMARY KEY,
    parentId integer NOT NULL,
    user text NOT NULL,
    avatar text NOT NULL,
    timestamp integer NOT NULL,
    content text NOT NULL
)"""
cursor.execute(sql_query)