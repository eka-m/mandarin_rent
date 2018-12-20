<template>
    <div>
        <div class="row">
            <div class="col">
                <label>Клиент</label>
                <div class="m-typeahead">
                    <input type="text"
                           class="form-control m-input clientTypeahead"
                           data-url="/async/clients/search"
                           placeholder="ФИО или серийный номер пасспорта"
                           ref="clientTypeahead">
                    <input type="hidden" name="client_id" :value="selectedClient ? selectedClient.id : ''">
                </div>
            </div>
        </div>
        <div class="row mt-3" v-if="selectedClient">
            <div class="col">
                <ul class="list-group">
                    <li class="list-group-item animated fadeIn">
                        <span
                                v-if="selectedClient.status"
                                :class="['m-badge', 'm-badge--wide', statuses[selectedClient.status]['class']]" >
                            {{statuses[selectedClient.status]['title']}}
                        </span>
                        <span class="m-badge m-badge--wide m-badge--info" v-if="selectedClient.passport_serial">
                            {{selectedClient.passport_serial}}
                        </span>
                        <a :href="'/clients/' + selectedClient.id" class="m-link">
                            {{selectedClient.first_name}}
                            {{selectedClient.last_name ? selectedClient.last_name : ''}}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<!--suppress JSUnfilteredForInLoop -->
<script type="text/babel">
export default {
  name: 'DealClient',
  props: {
    dataUrl: {
      default: null
    },
    currentClient: {
      default: null
    }
  },
  data() {
    return {
      el: null,
      selectedClient: null,
      serverData: [],
      statuses: {
        staff: {'title': 'Сотрудник', 'class': ' m-badge--accent'},
        vip: { title: 'VIP', class: 'm-badge--brand' },
        reliable: { title: 'Надежный', class: ' m-badge--success' },
        uncertain: { title: 'Неопределённый', class: 'm-badge--info' },
        doubtful: { title: 'Сомнительный', class: ' m-badge--warning' },
        unreliable: { title: 'Ненадежный', class: 'm-badge--metal' },
        blocked: { title: 'Заблокиран', class: ' m-badge--danger' }
      }
    };
  },
  created() {
    this.selectedClient = this.currentClient
      ? JSON.parse(this.currentClient)
      : null;
  },
  mounted() {
    this.el = $('.clientTypeahead');
    this.serverData = this.initializeBloodhound();
    this.initializeTypeHead();
    this.el.bind('typeahead:select', (ev, suggestion) => {
      this.selectedClient = suggestion;
      this.el.typeahead('val', '');
    });
  },
  methods: {
    initializeTypeHead() {
      this.el.typeahead(null, {
        name: 'inventory',
        limit:Infinity,
        minLength: 3,
        display: 'name',
        highlight: true,
        async: true,
        source: this.serverData,
        classNames: {
          highlight: 'text-info',
          cursor: 'btn m-btn m-btn--hover-danger'
        },
        templates: {
          pending: [
            `<div class="text-center">Ищем...</div><div class="text-center m-1"><span class="m-loader m-loader--brand" style="width: 30px; display: inline-block;"></span></div>`
          ],
          empty: [
            `<div class="empty-message animated fadeIn" style="padding: 10px 15px; width:100%; text-align: center;">
                                Ничего не найдено
                            </div>`
          ].join('\n'),
          header:
            '<h3 style="padding: 5px 15px; font-size: 1.2rem; margin:0;">Клиент</h3>',
          suggestion: Handlebars.compile(`
                        <div class="animated fadeIn">
                            <span class="m-badge m-badge--wide m-badge--info">{{passport_serial}}</span>
                            <strong>
                                {{first_name}} {{last_name}}
                            </strong>
                        </div>
                       `)
        }
      });
    },
    initializeBloodhound() {
      return new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        cache: false,
        remote: {
          url: this.dataUrl + '/%QUERY',
          wildcard: '%QUERY'
        }
      });
    }
  }
};
</script>

<style type="text/scss" scoped>
.tt-dataset {
  max-height: 150px;
  overflow-y: auto;
}
</style>