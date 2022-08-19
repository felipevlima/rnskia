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
    // marginBottom: 4,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#acacac',
    marginBottom: 32,
  },
  profile: {
    width: 140,
    height: 140,
    borderRadius: 20,
  },
  content: {
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#acacac',
    marginTop: 20,
  },
  accountData: {
    fontSize: 16,
    color: '#1e1e1e',
    marginTop: 8,
  },
  logout: {
    marginTop: 32,
    width: '100%',
    backgroundColor: 'hsla(0, 85.56701030927834%, 61.96078431372549%, 1)',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  logoutText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editButton: {
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    bottom: 0,
    position: 'absolute',
    marginLeft: 'auto',
    marginRight: 'auto',
    left: 0,
    right: 0,
  },
  editText: {
    fontSize: 16,
    color: '#FFF',
    fontWeight: 'bold',
  },
});
