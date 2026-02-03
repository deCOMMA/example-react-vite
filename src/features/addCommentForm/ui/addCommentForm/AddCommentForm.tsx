import clsx from "clsx"
import cls from './AddCommentForm.module.css'
import { useTranslation } from 'react-i18next'
import { Input } from "@/shared/ui/Input/Input";
import { Button } from "@/shared/ui/Button/Button";
import { DynamicModuleFolder, type ReducerList } from "@/shared/helpers/components/DynamicModuleFolder/DynamicModuleFolder";
import { addCommentFormActions, addCommentFormRudecer } from "../../model/slice/addCommentFormSlice";
import { useSelector } from "react-redux";
import { getAddCommentFormText } from "../../model/selectors/addCommentFormSelectors";
import { useAppDispatch } from "@/app/providers/Store/config/hooks";
import { memo, useCallback } from "react";

export type AddCommentFormProps = {
    className?: string;
    onSendComment: (text: string) => void;
}

const initialReducer: ReducerList = {
    addCommentFormShema: addCommentFormRudecer
}

const AddCommentForm = memo(({
    className, onSendComment
}: AddCommentFormProps) => {

    const { t } = useTranslation('article')
    const classNames = clsx(
        cls.addCommentForm,
        className
    );
    const text = useSelector(getAddCommentFormText);
    const dispatch = useAppDispatch()

    const onCommentTextChange = useCallback((value: string) => {
        dispatch(addCommentFormActions.setText(value))
    }, [dispatch])

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentTextChange('')
    }, [text, onSendComment, onCommentTextChange])

    return (
        <DynamicModuleFolder reducers={initialReducer} removeAfterUnmount={true}>
            <div className={classNames}>
                <Input className={cls.input} value={text} onChange={onCommentTextChange} placeholder={t('Enter comment text')} />
                <Button onClick={onSendHandler} theme="outline">{t('Send')}</Button>
            </div>
        </DynamicModuleFolder>
    )
})

export default AddCommentForm;
