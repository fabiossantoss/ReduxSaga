import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    flexDirection: 'row',
    padding: metrics.basePadding,
    marginTop: metrics.baseMargin * 2,
    marginHorizontal: metrics.baseMargin * 2,
    alignItems: 'center',
  },
  image: {
    height: 54,
    width: 54,
  },
  info: {
    marginLeft: metrics.baseMargin,
    flex: 1,
  },
  title: {
    color: colors.darker,
    fontWeight: 'bold',
    fontSize: 16,
  },
  url: {
    marginTop: metrics.baseMargin / 2,
    color: colors.primary,
  },
});

export default styles;
