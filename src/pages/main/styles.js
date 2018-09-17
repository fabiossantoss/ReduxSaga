import { StyleSheet } from 'react-native';
import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: metrics.basePadding * 2,
  },
  title: {
    fontSize: 32,
    color: colors.white,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: colors.white,
    lineHeight: 20,
    marginTop: metrics.baseMargin * 2,
    textAlign: 'center',
  },
  form: {
    marginTop: metrics.baseMargin * 2,
    alignSelf: 'stretch',
  },
  input: {
    height: 50,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
  },
  errorMessage: {
    color: colors.danger,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: metrics.baseMargin,
  },
  loading: {
    color: colors.darkTransparent,
  },
  button: {
    height: 50,
    backgroundColor: colors.secundary,
    borderRadius: metrics.baseRadius,
    paddingHorizontal: metrics.basePadding,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: metrics.baseMargin,
  },
  buttonText: {
    color: colors.darkTransparent,
    fontWeight: 'bold',
    fontSize: 14,
  },
  footer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 10,
  },
  footerLink: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
});

export default styles;
