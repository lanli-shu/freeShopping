$(function () {
    let flag = true
    $('.select>input').on('click', function () {
        // console.log(111)
        // 全选
        if (flag) {
            $('input').prop('checked', 'checked')
        } else {
            $('input').prop('checked', '')
        }
        flag = !flag
        // 计算价格
        let n = 0
        $('input:checked:not(.s)').each(function () {
            let sum = $(this).closest('.cart-goods').find('.sum').text()
            sum = parseFloat(sum)
            n += sum

            // console.log(sum)
        })
        n = n.toFixed(2)
        $('.result').html(n)


        // 数量
        let index = $('input:checked:not(.s)').length

        $('.pnum').html(index)


    })

    // 单个



    setInterval(function () {

        let n = 0
        $('input:checked:not(.s)').each(function () {
            let sum = $(this).closest('.cart-goods').find('.sum').text()
            sum = parseFloat(sum)
            n += sum

            // console.log(sum)
        })
        n = n.toFixed(2)
        $('.result').html(n)
        // 数量
        let index = $('input:checked:not(.s)').length

        $('.pnum').html(index)


    }, 30)















})