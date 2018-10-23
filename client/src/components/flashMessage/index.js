/*
 * @Author: mhc 
 * @Date: 2018-10-23 21:36:22 
 * @Last Modified by: mhc
 * @Last Modified time: 2018-10-23 22:18:47
 */

import React from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { filterMessage } from '../../actions';

const FlashMessage1 = props => {
    console.log(props)
    return (
        <React.Fragment>
            {
                props.flashMessage.map(item => {
                    return (
                        <div
                            key={item.id}
                            className={classnames('alert', {
                                'alert-success': item.type === 'success',
                                'alert-danger': item.type === 'danger'
                            })}
                        >
                            <button className="close" onClick={props.filterMessage.bind(null, item.id)}><span>&times;</span></button>
                            {item.text}
                        </div>
                    )
                })
            }
        </React.Fragment >
    )
}

const mapPropsToState = state => ({
    flashMessage: state.flashMessage.flashMessage
})
export const FlashMessage = connect(mapPropsToState, { filterMessage })(FlashMessage1)