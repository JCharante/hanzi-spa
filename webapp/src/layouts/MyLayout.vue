<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          汉字
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <div class="column" style="height: 100%">
          <div class="col-12">
              <q-card flat style="height: 100%">
                  <q-card-section class="text-center">
                      <div class="text-h6">hanzi</div>
                      <div class="text-subtitle2">A tool built to improve your typing speed</div>
                      <div class="text-subtitle2">(and flex on others).</div>
                  </q-card-section>
              </q-card>
          </div>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
    export default {
        name: 'MyLayout',

        data() {
            return {
                leftDrawerOpen: false,
            };
        },
    };
</script>
