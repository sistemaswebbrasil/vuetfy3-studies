<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left">{{ $t('albums.id') }}</th>
        <th class="text-left">{{ $t('albums.title') }}</th>
        <th class="text-left">{{ $t('albums.artist') }}</th>
        <th class="text-left">{{ $t('albums.price') }}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="item in rows" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.artist }}</td>
        <td>{{ item.price }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  async mounted() {
    const { data } = await this.axios.get('/albums');
    this.rows = data;
  },
  data() {
    return {
      rows: [],
    };
  },
};
</script>
