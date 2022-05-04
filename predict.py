from datetime import datetime, timedelta
import yfinance as yf
import pickle
import json

json_dict = {}

end_date = datetime.today()
start_date = end_date - timedelta(days=6)
date_list = [end_date + timedelta(i) for i in range(1,8)]

end_date = str(end_date.date())
start_date = str(start_date.date())
models = {
		"DOGE-INR":"models/Random_forest_Doge.sav",
		"TRX-INR":"models/Random_forest_Trx.sav",
		"ADA-INR":"models/Random_forest_Ada.sav",
		"ETH-INR":"models/Random_forest_Eth.sav",
		"BNB-INR":"models/Random_forest_Bnb.sav"
	}
json_dict["models"] = ["DOGE COIN", "TRON COIN", "CARDANO(ADA)", "ETHEREUM", "BINANCE"]

def prepareData():
	json_list = []
	for key in models:
		result_list = []
		cryptocurrency = key
		last_week_data = yf.download(cryptocurrency, start=start_date,
		                end=end_date)[::-1]
		last_week_data = last_week_data.drop(['Adj Close'], axis=1)[::-1]

		filename = models[key]
		random_model = pickle.load(open(filename, 'rb'))

		X = last_week_data.iloc[:, :].values
		next_week = random_model.predict(X)
		# for i in next_week:
		#   print(i)

		for i in range(len(date_list)):
			data = str(date_list[i].date()).split("-")
			year = int(data[0])
			month = int(data[1])
			date = int(data[2])
			result_list.append({
			"date" : date,
			"month" : month,
			"year" : year,
			"price" : next_week[i]
			})
		json_list.append(result_list)

	json_dict["prices"] = json_list

	json_obj = json.dumps(json_dict)

	with open("sample.json", 'w') as file:
		file.write(json_obj)

def reloadJson():
	with open("tracker.txt", 'r') as date_tracker:
		date_str = date_tracker.readline()
		date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()
		today_date = datetime.today().date()

		if(today_date == date_obj):
			print("same")
		else:
			prepareData()
			with open("tracker.txt", 'w') as date_tracker:
				date_tracker.write(str(today_date))
				print("newly created...")
		# if today_date != date_obj:
		# 	with open("tracker.txt", 'w') as tf:
		# 		tf.write(str(today_date))
		# 		prepareData()