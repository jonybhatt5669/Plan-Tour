import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className={styles.container}>{children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = {
  container: 'flex-1 ',
};
