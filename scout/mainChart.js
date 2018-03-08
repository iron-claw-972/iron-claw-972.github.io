function createChart(chartName, table, col) {
	var t = JSON.parse(JSON.stringify(table))
	sort(t, col);

	var ctx = document.getElementById(chartName).getContext('2d');
	var labels = getColumn(t, 0)
	var data = getColumn(t, col)
	var chart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: labels,
			datasets: [{
				label: col,
				backgroundColor: 'orange',
				borderColor: 'orange',
				data: data
			}]
		},
		options: {
			legend: {
				display: false
			},
			title: {
				display: true,
				text: chartName.toUpperCase(),
				fontSize: 21
			}
		}
	});
}

function getColumn(table, col) {
	var c = []
	for (var i = 0; i < table.length; i++) {
		c.push(table[i][col])
	}
	return c
}

function sort(table, col) {
	table.sort(function(a, b) {
		return a[col] - b[col]
	})
}