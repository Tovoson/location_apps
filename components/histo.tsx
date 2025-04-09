import React, { useEffect } from 'react';
import { View, Dimensions, Text, StyleSheet } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import LoadingIndicator from './loading';

const MyHistogram = ({stat}: any) => {
  const screenWidth = Dimensions.get('window').width;
  
  const data = {
    labels: ['Min', 'Max', 'Total'],
    datasets: [
      {
        data: [stat.min, stat.max, stat.total],
      },
    ],
  };

  console.log(stat)
  

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    barPercentage: 0.7,
  };

  return (
    <View style={style.container} >
      <Text style={style.text} >Histogramme</Text>
      <BarChart
        data={data}
        width={screenWidth-20}
        height={300}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero={true}
        showBarTops={true}
        yAxisLabel="€ "
        yAxisSuffix=""
        style={style.graphe}
      />
    </View>
  );
};

export default MyHistogram;

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginBottom: 10,
    // width: '95%',
    // marginLeft: 10,
    backgroundColor: '#dfe6e9'
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
    color: '#444',
    marginBottom: 15,
    marginTop: 20,
    textTransform: 'uppercase',
  },
  graphe: {

  },
})