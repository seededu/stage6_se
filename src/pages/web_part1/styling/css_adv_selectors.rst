Advanced Selectors
==================

Grouping Selector
-----------------

In cases where you want to apply the same styling to multiple selectors you can group
them up as shown in the example below using commas to separate each selector:

.. literalinclude:: ../../_static/examples/css/group_selector_full.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="200px" src="../../_static/examples/css/group_selector_full.html"></iframe>

Descendant Selector
-------------------

To limit the scope of a selector to a particular parent tag you can use the descendant
selector syntax which is a sequence of selectors separated by whitespace.

The example below selects all ``<p>`` elements nested inside ``<div>`` elements,
including further descendents.

.. literalinclude:: ../../_static/examples/css/descendant_selector_full.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="200px" src="../../_static/examples/css/descendant_selector_full.html"></iframe>

Child Selector
--------------

To limit the scope of a selector to the immediate content of a parent element you can
use a child selector, which is a sequence of selectors separated by right angle
brackets.

The following example selects all ``<span>`` elements that are immediate children of a
``<p>`` element.

.. literalinclude:: ../../_static/examples/css/child_selector_full.html
    :language: html

.. grid::

    .. grid-item-card::

        .. raw:: html

            <iframe class="sd-w-100" height="240px" src="../../_static/examples/css/child_selector_full.html"></iframe>
