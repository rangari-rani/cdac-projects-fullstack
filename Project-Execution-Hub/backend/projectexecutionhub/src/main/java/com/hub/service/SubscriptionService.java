package com.hub.service;

import com.hub.model.PlanType;
import com.hub.model.Subscription;
import com.hub.model.User;

public interface SubscriptionService {
    Subscription createSubscription(User user);
    Subscription getUsersSubscription(Long userId) throws Exception;

    Subscription upgradeSubscription(Long userId, PlanType planType);

    boolean isValid(Subscription subscription);
}
