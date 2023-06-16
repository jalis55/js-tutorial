from flask import Flask, request, jsonify
from setfit import SetFitModel


app = Flask(__name__)

# Endpoint to process text
@app.route('/text', methods=['POST'])
def process_text():
    if 'text' not in request.json:
        return jsonify({'error': 'No text provided'}), 400
    
    text = request.json['text']
    
    # Perform your text processing logic here
    processed_text = text.upper()  # Example: Convert the text to uppercase
    model = SetFitModel.from_pretrained("StatsGary/setfit-ft-sentinent-eval")
    preds = model(text)

    return jsonify({'processed_text': preds}), 200

if __name__ == '__main__':
    app.run(debug=True)
