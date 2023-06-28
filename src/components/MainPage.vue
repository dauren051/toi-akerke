<template>
    <div>
        <div class="blok-1 sitecontainer">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <h1 class="kurmetti">
                            Құрметті қонақтар! 					
                        </h1>
                        <div class="shaktext">
                            <p>
                                Сіз(дер)ді <br> аяулы қызымыз Ақеркенің						
                                ұзату тойына арналған
                                салтанатты ақ дастарханымыздың
                                қадірлі қонағы болуға шақырамыз.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blok-2 sitecontainer">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="abouttoi">
                            <div class="toi1">
                                Той жайлы
                            </div>
                            <div class="toi2">
                                Той иелері:
                            </div>
                            <div class="toi3">
                                Марат-Алтынай					</div>
                            <div class="toi7"></div>
                            <div class="toi4">
                                Тойдың басталу уақыты:<br>
                                19.08.2023 / сағат 17:00					</div>
                            <div class="toi5">
                                Тойдың басталуына қалды:
                            </div>
                            <div class="toi6">
                                <div class="timer">
                                    <div class="timer__items">
                                        <div class="timer__item timer__days" data-title="күн"></div>
                                        <div class="timer__item timer__hours" data-title="сағат"></div>
                                        <div class="timer__item timer__minutes" data-title="минут"></div>
                                        <div class="timer__item timer__seconds" data-title="секунд"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="toi8"></div>
                            <div class="toi9">Тойдың мекен-жайы:</div>
                            <div class="toi10">
                                &ZeroWidthSpace;Ашимов көшесі, 13/1 <br>
                                <span>Ресторан "Жибек жолы"</span><br><br>
                            </div>
                            <a target="_blank" href="https://2gis.kz/almaty/geo/70000001031375558" class="twogis">Карта арқылы ашу</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="blok-5 sitecontainer">
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="prigtitle">
                            Құрметті қонақ, <br> тойға келетініңізді нақтылаңыз:
                        </div>
                        <div class="prtdop" style="display:none;">
                            Біздің салтанатымыздың қонағы боласыз ба?
                        </div>
                        <div id="form-1" class="zayavka">
                            <input type="hidden" name="shaqyruid" value="1787">
                            <input type="hidden" name="konakid" value="0">
                            <input class="custom-radio" checked="yep" type="radio" value="Иә, өзім барамын!" id="contactChoice1" name="zhauap"  >
                            <label class="otvetyn" for="contactChoice1">Иә, өзім барамын!</label>
                            <br>
                            <input class="custom-radio" checked="yep" type="radio" value="Жұбайыммен бірге барамын" id="contactChoice2" name="zhauap" >
                            <label class="otvetyn" for="contactChoice2">Жұбайыммен бірге барамын</label>
                            <br>
                            <input class="custom-radio" checked="yep" type="radio" value="Өкінішке орай, келе алмаймын" id="contactChoice3" name="zhauap" >
                            <label class="otvetyn" for="contactChoice3">Өкінішке орай, келе алмаймын</label>
                            <br>
                            <span class="spanzay">Аты-жөніңіз:</span>
                            <input v-model="fio" class="inputname" type="text" name="name" placeholder="Аты-жөніңіз">
                            <span class="spanzay">Той иелеріне тілегіңіз:</span>
                            <textarea v-model="greet" name="tilek" class="inputtilek" placeholder="Тілегіңізді осында жазыңыз"></textarea>
                            <button :disabled="isEmpty()" @click="sendShit()" class="zayotrp">Жіберу</button>
                        </div>
                    </div>
                </div>
            </div>
            <audio-player></audio-player>
        </div>
    </div>
</template>

<script >
import axios from 'axios';
import Toast from '@/components/Toast.vue';
import AudioPlayer from './AudioPlayer.vue';
export default{
    components: {
        Toast,
        AudioPlayer
    },
    data(){
        return{
            greet:'',
            fio:''
        }
    },
    methods:{
        isEmpty(){
            if(!!this.fio === false || !!this.greet === false){
                return true
            }else{
                return false
            }
        },
        sendShit(){
            let variant = document.querySelector('input[name="zhauap"]:checked').value;
            let fio = this.fio
            let greet = this.greet
            let payload = {
                variant:variant,
                fio:fio,
                greet:greet
            }
            this.sendMessage(payload)
        },
        sendMessage(payload) {
            const chatId = '359581700';
            const message = payload;
            const telegramBotToken = '5856463972:AAHaXJJvld2PpXU5XAvHtG_YcyaUFdGRnvo';
            const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;

            axios.post(url, {
                chat_id: chatId,
                text: message,
            })
            .then(response => {
                // console.log('Message sent successfully:', response.data);
            })
            .catch(error => {
                // console.error('Error sending message:', error);
            });
            // let  = document.querySelector('input[name="zhauap"]:checked').value;
            document.getElementsByClassName('inputname')[0].value = ''
            document.getElementsByClassName('inputtilek')[0].value = ''
            this.$bvToast.toast('Ақпарат той иелеріне жіберілді!', {
                title: 'Хабарлама!',
                noAutohide:true,
                appendToast: true,
                variant:'success',
                solid:true,
            })
        },
        // },
    },
    mounted(){
        this.$nextTick(() => {
            // конечная дата
            //const deadline = new Date(2022, 11, 05, 18:00:00);
            const deadline = new Date(2023, 7, 19, 17, 0, 0);
            // new Date(yyyy, mm-1, dd, hh, mm, ss);
            // id таймера
            let timerId = null;
            
            // склонение числительных
            function declensionNum(num, words) {
                return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
            }
            
            // вычисляем разницу дат и устанавливаем оставшееся времени в качестве содержимого элементов
            function countdownTimer() {
                const diff = deadline - new Date();
                    if (diff <= 0) {
                    clearInterval(timerId);
                }
                
                const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
                const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
                const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
                const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
                
                const $days = document.querySelector('.timer__days');
                const $hours = document.querySelector('.timer__hours');
                const $minutes = document.querySelector('.timer__minutes');
                const $seconds = document.querySelector('.timer__seconds');
                if($days && $hours && $minutes && $seconds){
                    $days.innerText  = days < 10 ? '0' + days : days;
                    $hours.innerText  = hours < 10 ? '0' + hours : hours;
                    $minutes.innerText  = minutes < 10 ? '0' + minutes : minutes;
                    $seconds.innerText  = seconds < 10 ? '0' + seconds : seconds;
                }
                
                $days.dataset.title = declensionNum(days, ['күн', 'күн', 'күн']);
                $hours.dataset.title = declensionNum(hours, ['сағат', 'сағат', 'сағат']);
                $minutes.dataset.title = declensionNum(minutes, ['минут', 'минут', 'минут']);
                $seconds.dataset.title = declensionNum(seconds, ['секунд', 'секунд', 'секунд']);
            }
            
            // вызываем функцию countdownTimer
            countdownTimer();
            
            const $days = document.querySelector('.timer__days');
            // const $dayscontent = document.querySelector('.dayscontent');
            // const $dayscontent2 = document.querySelector('.dayscontent2');
            // $dayscontent.textContent = $days.textContent;
            
            if (parseInt($days.textContent) > 100) {
                $days.textContent = '30';
            } else if (parseInt($days.textContent) > 70) {
                $days.textContent = '20';
            } else {
                $days.textContent = '10';
            }
            
            // $dayscontent2.textContent = $days.textContent;
            
            var discountprice = 18900 - 18900 * parseInt($days.textContent) / 100;
            discountprice = Math.round(discountprice / 10) * 10;
            discountprice = String(discountprice).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, "$1 ");
            // $(".discountprice").text(discountprice);
            // const $dayscontent.dataset.title = $days.textContent;
            // вызываем функцию countdownTimer каждую секунду
            timerId = setInterval(countdownTimer, 1000);

            const button = document.querySelector('.zayotrp');

            button.addEventListener('click', function() {
            button.classList.add('clicked');
            button.disabled = true;

            // Simulating a delay before re-enabling the button
            setTimeout(function() {
                button.classList.remove('clicked');
                button.disabled = false;
            }, 500);
            });
        });
    }
}
</script>


<style type="text/css">

</style>