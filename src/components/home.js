import Payment from '@/components/base/Payment.vue'
import Ytplayer from '@/components/base/Ytplayer.vue'
import Grform from '@/components/base/Grform.vue'
import moment from 'moment'

export default {
    name: 'Home',
    components: {
        Payment,
        Ytplayer,
        Grform
    },
    data() {
        return {
            //
        }
    },
    methods: {
        scrollMeTo(refName) {
            var element = this.$refs[refName];
            var top = element.offsetTop;
            window.scrollTo(0, top);
        }
    },
    computed:{
        price() {
            const now = moment()
            const startDate = moment("4-1-2018", "MM-DD-YYYY")
            const stopDate = moment("4-10-2018", "MM-DD-YYYY")
            
            const diffInDays = now.diff(startDate, 'days')

            let price = 120000

            if (diffInDays > 0 && stopDate.diff(now) > 0) {
                price = price + 2000 * diffInDays
            }
            return price
        }
    },
    mounted() {
        //
    }
}