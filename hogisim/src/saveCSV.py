import csv
import pymongo

myclient = pymongo.MongoClient("mongodb://localhost:27017/?retryWrites=true&serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&3t.uriVersion=3&3t.connection.name=hogisim&3t.alwaysShowAuthDB=true&3t.alwaysShowDBFromUserRole=true")
db = myclient["hogisim"]
csv = "../data.csv"

with open(csv, 'r', encoding='utf-8-sig', newline='') as csvfile:
	reader = csv.DictReader(csvfile)
for row in reader:
    for rows in reader:                                
            jsonData = {}
            jsonData['word'] = rows['word'].strip()
            jsonData['frequency'] = rows['frequency'].strip()
            
            jsonList.append(jsonData)
    
    db.hogisim.insert_many(jsonList)



