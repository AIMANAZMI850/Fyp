import matplotlib.pyplot as plt
import numpy as np
from sklearn.preprocessing import LabelEncoder
from sklearn.svm import OneClassSVM
import mplcursors
import pandas as pd



# Load the dataframe
df = pd.read_csv(r"E:\SEM 5\PROJECT 1\code\source code 1\july_wqc_edit.csv")

# Convert categorical variables to numerical values using LabelEncoder
le = LabelEncoder()
df['wqc'] = le.fit_transform(df['wqc'])

# Create input array for One-Class SVM
x = df.values

# Fit the One-Class SVM model
clf = OneClassSVM(nu=0.1, kernel="rbf", gamma=0.1)
clf.fit(x)

# Predict outliers using One-Class SVM
y_pred = clf.predict(x)

# Define the color map
colors = np.array(['blue', 'red'])

# Create a scatter plot with the x and y coordinates
fig, ax = plt.subplots()
scatter = ax.scatter(x[:, 0], x[:, 1], c=colors[(y_pred + 1) // 2], cmap=plt.cm.brg)

# Set the labels for the tooltip
tooltip_labels = ['Normal' if c == 'blue' else 'Abnormal' for c in colors]

# Use mplcursors to show tooltips
mplcursors.cursor(hover=True).connect(
    "add", lambda sel: sel.annotation.set_text(tooltip_labels[sel.target.index]))

# Set the legend
legend1 = ax.legend(*scatter.legend_elements(), loc="upper right", title="Classes")
ax.add_artist(legend1)

plt.show()
