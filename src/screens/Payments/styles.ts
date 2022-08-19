import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingHorizontal: 24,
    height: '100%',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#acacac',
    marginBottom: 32,
  },
  transactionsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
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
