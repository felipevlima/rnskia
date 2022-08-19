import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: '#fff',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#acacac',
    // marginBottom: 8,
  },
  profile: {
    width: 48,
    height: 48,
    backgroundColor: '#d9dde8',
    borderRadius: 12,
  },
  chartView: {
    // marginTop: 32,
    marginLeft: -24,
    marginRight: -24,
    width: '100%',
    // marginTop: 200,
  },
  transactionsTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    // marginTop: 32,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7c7c7c',
    paddingTop: 16,
    paddingBottom: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
  },
  totalValue: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    fontSize: 16,
  },
});
