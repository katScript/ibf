package com.spring.web.order.data;

import com.spring.web.helpers.Option;

import java.util.ArrayList;
import java.util.List;

public class Category {
    private static final String[] VALUE = {"facebook", "instagram", "tiktok", "shopee", "youtube", "telegram"};
    private static final String[] LABEL = {"Facebook", "Instagram", "TikTok", "Shopee", "Youtube", "Telegram"};

    public static List<Option> getAlLCategoryType() {
        List<Option> list = new ArrayList<>();

        for (int i = 0; i < VALUE.length; ++i) {
            list.add(new Option(
                    VALUE[i],
                    LABEL[i]
            ));
        }

        return list;
    }
}
