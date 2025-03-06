import { createNavigationContainerRef, ParamListBase, StackActions } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export const navigationRef = createNavigationContainerRef<NativeStackNavigationProp<ParamListBase>>();

type NavigationProps = {
    name: string;
    params?: any;
    onGoBack?: (result: any) => void;
};

const callbackMap: Record<string, (result: any) => void> = {};

export function navigate(props: NavigationProps) {
    if (navigationRef.isReady()) {
        if (props.onGoBack) {
            callbackMap[props.name] = props.onGoBack;
        }
        navigationRef.navigate(props.name, props.params);
    }
}

type GoBackProps = {
    result?: any;
};

export function goBack(props?: GoBackProps) {
    if (navigationRef.isReady() && navigationRef.canGoBack()) {
        const currentRoute = navigationRef.getCurrentRoute();

        if (currentRoute?.name && callbackMap[currentRoute.name]) {
            callbackMap[currentRoute.name](props?.result);
            delete callbackMap[currentRoute.name];
        }

        navigationRef.goBack();
    }
}

export function pushAndReplace(props: NavigationProps) {
    if (navigationRef.isReady()) {
        navigationRef.dispatch(StackActions.push(props.name, props.params));
        navigationRef.dispatch(StackActions.replace(props.name, props.params));
    }
}
