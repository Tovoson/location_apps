import React, { useEffect } from 'react';
import { View, Dimensions, Text } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import LoadingIndicator from './loading';

const MyHistogram = ({stat}: any) => {
  const screenWidth = Dimensions.get('window').width;
  
  const data = {
    labels: ['Min', 'Max', 'Total'],
    datasets: [
      {
        data: [20, 45, 28],
      },
    ],
  };
  

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
    <View>
      <Text>Histogramme mensuel</Text>
      <BarChart
        data={data}
        width={screenWidth - 20}
        height={220}
        chartConfig={chartConfig}
        verticalLabelRotation={30}
        fromZero={true}
        showBarTops={true}
      />
    </View>
  );
};

export default MyHistogram;