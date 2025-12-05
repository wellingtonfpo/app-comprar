import { View, Image, TouchableOpacity, Text, FlatList } from 'react-native';

import { styles } from './styles';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Filter } from '@/components/Filter';
import { FilterStatus } from '@/types/FilterStatus';
import { Item } from '@/components/Item';

const FILTER_STATUS: FilterStatus[] = [FilterStatus.PENDING, FilterStatus.DONE];
// const ITEMS = Array.from({ length: 100 }).map((_, index) => `Item - ${index}`);
const ITEMS = [
  { id: '1', status: FilterStatus.PENDING, description: 'Café' },
  { id: '2', status: FilterStatus.PENDING, description: 'Leite' },
  { id: '3', status: FilterStatus.PENDING, description: 'Pão' },
  { id: '4', status: FilterStatus.DONE, description: 'Ovos' },
  { id: '5', status: FilterStatus.PENDING, description: 'Manteiga' },
];
export function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('@/assets/logo.png')} style={styles.logo} />

      <View style={styles.form}>
        <Input placeholder='O que você deseja comprar?' />
        <Button title='Adicionar' />
      </View>

      <View style={styles.content}>
        <View style={styles.header}>
          {FILTER_STATUS.map((status) => (
            <Filter key={status} status={status} isActive />
          ))}

          <TouchableOpacity style={styles.clearButton}>
            <Text style={styles.clearText}>Limpar</Text>
          </TouchableOpacity>
        </View>

        {/* <ScrollView>
          {Array.from({ length: 100 }).map((_, index) => (
            <Item
              key={index}
              data={{ status: FilterStatus.PENDING, description: 'Café' }}
              onRemove={() => console.log('remover')}
              onStatus={() => console.log('mudar status')}
            />
          ))}
        </ScrollView> */}

        <FlatList
          data={ITEMS}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          ListEmptyComponent={() => (
            <Text style={styles.empty}>Nenhum item para apresentar</Text>
          )}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <Item
              data={item}
              onRemove={() => console.log('remover')}
              onStatus={() => console.log('mudar status')}
            />
          )}
        />
      </View>
    </View>
  );
}
