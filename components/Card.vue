<template>
  <div  id="e3" style="max-width: 400px; margin: auto;"
  class="grey lighten-3">
        <v-container
        fluid
        style="min-height: 0;"
        grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card  target="_blank" :href="url" :color="color" class="white--text">
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs7>
                    <div>
                      <div class="headline">{{title}}</div>
                      <div class="headname">{{artistName}}</div>
                    </div>
                  </v-flex>
                  <v-flex xs5>
                    <v-img
                    :src="image"
                    height="100px"
                    contain>
                  </v-img>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
    props: ['title', 'image', 'artistName', 'url', 'color'],
}
</script>

<style scoped>
    .red{
        background-color: rgba(253, 109, 109, 0.514);
    }
    .headline{
        font-size: 20px;
        font-weight: 600;
    }
    .headname{
        padding-top: 1em;
        font-style: italic;
        color: rgb(117, 116, 116);
    }
</style>
