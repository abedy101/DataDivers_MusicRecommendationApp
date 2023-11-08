from flask import Flask, render_template, jsonify, request
import pickle
import pandas as pd
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app, supports_credentials=True)
app.config['CORS_HEADERS'] = 'Content-Type'

neigh = pickle.load(open("knn_model_recNN", 'rb'))
training_df = pd.read_csv("training_csv.csv")
music_df = pd.read_csv("cleaned_music.csv")
@app.route('/recommendations', methods=['POST'])
@cross_origin(supports_credentials=True, origin="*")
def send_recommendations():
    track_id = request.get_data()
    track_id = track_id.decode()
    nbrs = neigh.kneighbors(training_df.iloc[music_df.loc[music_df['track_id'] == track_id].index[0]].values.reshape(1,-1), n_neighbors=11, return_distance=False)
    json_array = []
    for nbr in nbrs[0][1:]:
        row = music_df.iloc[nbr]
        json_array.append({"track_id": row["track_id"],
                        "artist": row["artists"],
                        'track': row['track_name'], 
                        'pop': int(row['popularity']),
                        'genre': row['track_genre']})
    response = jsonify(json_array)
    return response

if __name__ == '__main__':
    app.run()