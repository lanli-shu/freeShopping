window.onload = function () {
    $('#nav .wrap .car>div').css({
        'cursor': 'pointer'
    })

    $('#nav .wrap .car>div:eq(0)').on('click', function () {
        location.href = 'cart.html'

    })
    $('#nav .wrap .car>div:eq(1)').on('click', function () {
        location.href = 'order.html'

    })

    $('#nav .wrap>img').on('click', function () {
        location.href = 'index.html'

    })


    // 侧导航
    $('#asnav li').on('mouseover', function () {
        $(this).addClass('active').show().siblings().removeClass('active')
        // $(this).append($('#on').show())
        $('#on').appendTo(this).show()
        let index = $(this).index()
        $('#solid').show().css({
            'top': index * 35 + 1 + `px`
        })
    }).on('mouseout', function () {
        $(this).removeClass('active')
        $('#on').hide()
        $('#solid').hide()
    })

    // 领券中心 
    $('#Side-window .receive').on('click', function () {
        //    $(this).next().toggle('fast')
        $(this).next().show('slow').delay(1000).hide('slow')

    })

    // 移入事件--楼层
    //  先隐藏
    $('#floor li').hide()
    $(window).scroll(function () {
        let scrollTop = $('html,body').scrollTop()
        if (scrollTop >= 1200 && scrollTop <= 4000) {
            $('#floor li').show()
        } else {
            $('#floor li').hide()

        }
    })
    // 鼠标移入-楼层变色
    $('#floor li').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active')
        $(this).find('span').addClass('on').siblings().removeClass('on')


    }).on('mouseout', function () {
        $(this).removeClass('active')
    })

    // 点击事件--楼层
    $('#floor li').on('click', function () {
        // 获取当前点击的索引
        let index = $(this).index()
        // 获取对应楼层的偏移值
        let fTop = $('.floor1').eq(index).offset().top
        $('html,body').animate({
            scrollTop: fTop
        }, 500)

    })



    // 新书畅销榜

    $('#newbooks h3').on('click', function () {
        $(this).addClass('active').closest('li').siblings().find('h3').removeClass('active')
        $(this).next().show('slow').closest('li').siblings().find('div').hide('slow')

    })



    // 回到顶部
    $('#top').hide()
    $(window).scroll(function () {
        let scrollTop = $('html,body').scrollTop()
        if (scrollTop >= 3000) {
            $('#top').show()

        } else {
            $('#top').hide()

        }
    })
    $('#top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)

    })

    // 推广商品
    $('.popularize-conte li').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })


    // 产品页面

    $('#hot-books dt').on('click', function () {
        $(this).addClass('active').siblings('dt').removeClass('active')
        $(this).next().show().siblings('dd').hide()
    })








    // 登录页

    $('.lore a').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
        let index = $(this).index()
        $('.con>div').hide()
        $('.con>div').eq(index).show()

    })

    // 二维码
    $('.on>img:eq(0)').on('mouseover', function () {
        $(this).animate({
            'margin-left': '36px'
        }, 1000).next().slideDown('slow')
    })



    $('#banner .con>div:eq(1)>div').on('click', function () {
        location.href = 'register.html'
        // console.log(111)
    })















    // 产品跳转到购物车
    $('#product #content .recommend-conte li').on('click', function () {
        location.href = "product_details.html"
    })

    $('#product #content .recommend-conte li').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active')


    })










    // 产品列表

    $('#prod #content .product-details .title>a').on('click', function () {
        $(this).addClass('bgc').siblings().removeClass('bgc')
        let index = $(this).index()
        $('#prod #content .product-details .conte>div').hide().eq(index).slideDown('slow')
        return false
    })

    //购物车弹窗
    $('#add-cart .cart>div:nth-child(6)>button').on('click', function () {
        $('#mongolia').show()
    })
    $('#popup>button:eq(0)').on('click', function () {
        $('#mongolia').hide()


    })

    // 购物车种类选择
    $('.add-cart-conte .cart .tab>span').css({
        'cursor': 'pointer'
    })
    $('.add-cart-conte .cart .tab>span').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active')
    })


    // 购物车人气单品
    $('#prod #content .recommend-conte li').on('mouseover', function () {
        $(this).addClass('active').siblings().removeClass('active')


    })


    // 购物车点击增减
    $('.add-cart-conte .cart .count>span ').css("cursor", "pointer")
    $('.add-cart-conte .cart .count ').on('click', 'span:eq(0)', function () {
        let num = $('.count').html()
        num = parseInt(num)
        num++
        $('.count').html(num + "<span>+</span><span>-</span>")
        $('.add-cart-conte .cart .count>span ').css({
            "cursor": "pointer",
            "user-select": "none"
        })

    })


    $('.add-cart-conte .cart .count ').on('click', 'span:eq(1)', function () {
        let num = $('.count').html()
        num = parseInt(num)
        num--
        if (num <= 0) {
            num = 0
        }
        $('.count').html(num + "<span>+</span><span>-</span>")
        $('.add-cart-conte .cart .count>span ').css({
            "cursor": "pointer",
            "user-select": "none"
        })


    })


    /*
        // 购物车
        // 判断类名的标杆
        let flag = true
        $('#cart-conte .checked').on('click', function () {


            if (flag) {

                $(this).addClass('activeOn')
                // 获取购物车的小计
                let sum = $(this).closest('.cart-goods').find('.sum').html()
                // 获取出来是字符串 所以要先转为数字类型
                sum = parseFloat(sum)
                // 保留两位小数
                sum = sum.toFixed(2)
                // 渲染到总价身上
                $('.s').html(sum)


            } else {
                $(this).removeClass('activeOn')
                // 取消选择 渲染为0
                $('.s').html(0)
            }
            flag = !flag

            // 获取商品 选中几件商品就渲染到已选择商品上面去
            let num = $('#cart-conte .checked.activeOn').length
            $('.num').html(num)

            if ($('#cart-conte .checked.activeOn').length == 2) {
                let sum = $(this).closest('.cart-goods').find('.sum').html()
                sum = parseFloat(sum)
                sum += sum
                sum = sum.toFixed(2)
                $('.s').html(sum)

            } else if ($('#cart-conte .checked.activeOn').length == 1) {
                let sum = $(this).closest('.cart-goods').find('.sum').html()
                sum = parseFloat(sum)
                sum = sum.toFixed(2)
                $('.s').html(sum)
            }
        })
        // 判断类名的标杆
        let flag1 = true
        $('#cart-conte .checkedon').on('click', function () {

            if (flag1) {
                let s = 0
                let sum = $('.sum')
                sum.each(function () {
                    let n = $('.sum').html()
                    n = parseInt(n)
                    s += n
                })
                s = s.toFixed(2)
                $('.s').html(s)
                console.log(s)
                $('#cart-conte .checked , #cart-conte .checkedon').addClass('activeOn')
            } else {
                $('#cart-conte .checked , #cart-conte .checkedon').removeClass('activeOn')

                $('.s').html(0)

            }
            flag1 = !flag1
            // 获取商品 选中几件商品就渲染到已选择商品上面去
            let num = $('#cart-conte .checked.activeOn').length
            $('.num').html(num)

        })

    // 购物车第一个加减
        $('.cart-goods .boxs').on('click', 'span:first-child', function () {
                 let d = $('.cart-goods .boxs').text()
                d = parseFloat(d)
                d++
                $('.cart-goods .boxs').html(d + '<span>+</span><span>-</span>')
               let m= $('.cart-goods .nums').text()
                 m=parseFloat(m)
               let s=d*m 
               s=s.toFixed(2)
                $('.sum').html(s)
     

        })
        $('.cart-goods .boxs').on('click', 'span:last-child', function () {
            let d = $('.cart-goods .boxs').text()
           d = parseFloat(d)
           d--
           if(d<=0){
               d=0
           }
           $('.cart-goods .boxs').html(d + '<span>+</span><span>-</span>')
           let m= $('.cart-goods .nums').text()
                 m=parseFloat(m)
               let s=d*m 
               s=s.toFixed(2)

                $('.sum').html(s)
    })
    // 第二个加减
        $('.cart-goods .box').on('click', 'span:first-child', function () {

        let d = $('.cart-goods .box').text()
        d = parseFloat(d)
        d++
        $('.cart-goods .box').html(d + '<span>+</span><span>-</span>')
        let m= $('.cart-goods .nums_1').text()
        m=parseFloat(m)
      let s=d*m 
      s=s.toFixed(2)

       $('.sum').html(s)

    })
    $('.cart-goods .box').on('click', 'span:last-child', function () {

        let d = $('.cart-goods .box').text()
        d = parseFloat(d)
        d--
        if(d<=0){
            d=0
        }
        $('.sum').html(d)

        $('.cart-goods .box').html(d + '<span>+</span><span>-</span>')
        let m= $('.cart-goods .nums_1').text()
        console.log(m)
        m=parseFloat(m)
      let s=d*m 
      s=s.toFixed(2)

       $('.sum').html(s)
    })
    */

    //购物车全选

    let flag = true
    $('input.s').on('click', function () {
        if (flag) {
            $('input').prop('checked', 'checked')
        } else {
            $('input').prop('checked', '')

        }
        flag = !flag

        // 商品数量
        let num = $('input:checked:not(.s)').length
        $('.num').html(num)
        // 计算总价
        let s = 0
        $('input:checked:not(.s)').each(function () {
            let sum = $(this).closest('.cart-goods').find('.sum').html()
            sum = parseFloat(sum)
            s += sum
        })
        s = s.toFixed(2)
        $('.s').html(s)

    })

    // 单价商品
    setInterval(function () {
        // 计算总价
        let s = 0
        $('input:checked:not(.s)').each(function () {
            let sum = $(this).closest('.cart-goods').find('.sum').html()
            sum = parseFloat(sum)
            s += sum
        })
        s = s.toFixed(2)
        $('.s').html(s)
        // 商品数量
        let num = $('input:checked:not(.s)').length
        $('.num').html(num)
    }, 30)



    // 购物车加减

    // 购物车第一个加减
    $('.cart-goods .boxs').on('click', 'span:first-child', function () {
        let d = $('.cart-goods .boxs').text()
        d = parseFloat(d)
        d++
        $('.cart-goods .boxs').html(d + '<span>+</span><span>-</span>')
        let m = $('.cart-goods .nums').text()
        m = parseFloat(m)
        let s = d * m
        s = s.toFixed(2)
        $('.sum1').html(s)


    })
    $('.cart-goods .boxs').on('click', 'span:last-child', function () {
        let d = $('.cart-goods .boxs').text()
        d = parseFloat(d)
        d--
        if (d <= 0) {
            d = 0
        }
        $('.cart-goods .boxs').html(d + '<span>+</span><span>-</span>')
        let m = $('.cart-goods .nums').text()
        m = parseFloat(m)
        let s = d * m
        s = s.toFixed(2)

        $('.sum1').html(s)
    })
    // 第二个加减
    $('.cart-goods .box').on('click', 'span:first-child', function () {

        let d = $('.cart-goods .box').text()
        d = parseFloat(d)
        d++
        $('.cart-goods .box').html(d + '<span>+</span><span>-</span>')
        let m = $('.cart-goods .nums_1').text()
        m = parseFloat(m)
        let s = d * m
        s = s.toFixed(2)

        $('.sum2').html(s)

    })
    $('.cart-goods .box').on('click', 'span:last-child', function () {

        let d = $('.cart-goods .box').text()
        d = parseFloat(d)
        d--
        if (d <= 0) {
            d = 0
        }
        $('.sum').html(d)

        $('.cart-goods .box').html(d + '<span>+</span><span>-</span>')
        let m = $('.cart-goods .nums_1').text()
        console.log(m)
        m = parseFloat(m)
        let s = d * m
        s = s.toFixed(2)

        $('.sum2').html(s)
    })















    // 订单
    $('#order #order-conte >.loc>button').on('click', function () {
        $('#mongolia').show()


    })

    $('#check_out #order-conte>button').on('click', function () {
        $('#mongolia').show()

    })



    //表单验证
    var obj = {
        username: false,
        userpas: false,
        userpas2: false,
        number: false
    }



    // 验证用户名
    $('#usernamer').on('input', function () {
        if ($(this).val().length <= 2) {
            obj.username = false
            $(this).closest('div').css({
                'border': '1px solid #f00'
            })

        } else {
            obj.username = true
            $(this).closest('div').css({
                'border': '1px solid #0f0'
            })

        }
    })
    // 验证密码
    $('#userpas').on('input', function () {
        if ($(this).val().length <= 6) {
            obj.userpas = false
            $(this).closest('div').css({
                'border': '1px solid #f00'
            })

        } else {
            obj.userpas = true
            $(this).closest('div').css({
                'border': '1px solid #0f0'
            })
        }
    })
    // 验证再次输入的密码
    $('#userpas2').on('input', function () {
        if ($(this).val() != $('#userpas').val()) {
            obj.userpas2 = false
            $(this).closest('div').css({
                'border': '1px solid #f00'
            })
        } else {
            obj.userpas2 = true
            $(this).closest('div').css({
                'border': '1px solid #0f0'
            })
        }
    })
    // 验证手机号
    $('#number').on('input', function () {
        var reg = /^1[356789]\d{9}$/

        if (!reg.test($(this).val())) {
            obj.number = false
            $(this).closest('div').css({
                'border': '1px solid #f00'
            })
        } else {
            obj.number = true
            $(this).closest('div').css({
                'border': '1px solid #0f0'
            })
        }
    })


    $('form').on('submit', function () {
        var pass = true
        for (var i in obj) {
            if (obj[i] == false) {
                $('#' + i).parent().css({
                    'border': "1px solid #f00"
                })
                pass == false
            }


        }

        return false


    })








}