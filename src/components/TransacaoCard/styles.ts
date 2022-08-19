import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#eee',
    padding: 18,
    borderRadius: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  infoSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSquare: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#d9dde8',
    borderRadius: 12,
  },
  textInfo: {
    marginLeft: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 13,
    color: '#7e7e7e',
  },
  value: {
    fontSize: 16,
    color: '#c2433f',
    fontWeight: 'bold',
  },
});
